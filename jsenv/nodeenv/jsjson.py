import ast
import json
import logging
from textwrap import dedent
from typing import Callable, Dict, List, Union

logger = logging.getLogger(__name__)
JsonDict = Dict[Union[str, int], "JsonValue"]
JsonList = List["JsonValue"]
JsonValue = Union[bool, int, str, JsonDict, JsonList]


class NodeLoader:
    """`NodeLoader` converts a string representation of JS/JSON data into a Python object.
    It may use :js:meth:`JSON.stringify` to convert js to json.
    """

    @classmethod
    async def json_loads(
        cls, js: str, try_load_first: bool = True, parser: Callable[[str], JsonValue] = json.loads
    ) -> JsonValue:
        """
        The json_loads function converts a string representation of JS/JSON data into a Python object.
        It may use :js:meth:`JSON.stringify` to convert js to json.

        :param js: Used to Pass in the json string.
        :param try_load_first: Used to Specify whether to try loading the json string with the `parser` first.
        :param parser: Used to Specify the function that will be used to parse the string.
        :return: A python object that represents the same content as the js/json string.
        """
        if try_load_first:
            try:
                return parser(js)
            except json.JSONDecodeError:
                pass

        from .execjs import Partial

        json_str = await Partial("JSON.stringify", js)()
        try:
            return parser(json_str)
        except json.JSONDecodeError as e:
            logger.exception("Failed to decode json input!")
            logger.debug("json_str=%s", json_str)
            raise e


class AstLoader:
    """`AstLoader` uses standard :mod:`ast` module to parse the js/json"""

    class RewriteUndef(ast.NodeTransformer):
        const = {
            "undefined": ast.Constant(value=None),
            "null": ast.Constant(value=None),
            "true": ast.Constant(value=True),
            "false": ast.Constant(value=False),
        }

        def visit_Name(self, node: ast.Name):
            if node.id in self.const:
                return self.const[node.id]
            return ast.Str(s=node.id)

    @classmethod
    def json_loads(cls, js: str, filename: str = "stdin") -> JsonValue:
        """
        The json_loads function loads a JSON object from a js/json string. It uses standard
        :mod:`ast` module to parse the js/json.

        :param js: Used to Pass the js/json string to be parsed.
        :param filename: Used to Specify the name of the file that is being read. This is only for debug use.
        :return: A jsonvalue object.
        """
        js = dedent(js).replace(r"\/", "/")
        node = ast.parse(js, mode="eval")
        node = ast.fix_missing_locations(cls.RewriteUndef().visit(node))
        code = compile(node, filename, mode="eval")
        return eval(code)


def json_loads(js: str) -> JsonValue:
    """The json_loads function converts a string representation of JS/JSON data into a Python object.
    Current implementation is using :external+python:mod:`ast`.

    If you need more parameters or another implementation, call `xxxLoader.json_loads` instead.

    .. seealso:: :meth:`.AstLoader.json_loads`

    :param js: Used to Pass the JS/JSON string.
    :return: A jsonvalue object.
    """
    return AstLoader.json_loads(js)
