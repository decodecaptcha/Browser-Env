from shutil import which
from textwrap import dedent

from .exception import JsImportError
from .execjs import ExecJS


class JSDOM(ExecJS):
    """JSDOM class provides a complete environment to encounter detection based on collecting
    runtime environment information.

    .. note:: requires :js:mod:`jsdom` to be installed.
    """

    @classmethod
    def check_jsdom(cls):
        """Check if :js:mod:`jsdom` is installed.

        :return: True if :js:mod:`jsdom` can be imported. Otherwise False.
        """
        from subprocess import run

        require = lambda m: run(
            cls.node, executable=which(cls.node), input=f"require('{m}')", text=True
        )
        return require("jsdom").returncode == 0

    def check_all(self):
        super().check_all()
        if not self.check_jsdom():
            raise JsImportError("jsdom")

    def __init__(self, *, src: str = "", ua: str = "", location: str = "", referrer: str = ""):
        super().__init__()
        src = src.replace("\n", " ")
        pre_def = f"var src=`{src}`;\nvar ua='{ua}',url='{location}',referrer='{referrer}';\n"
        self.setup.append(pre_def)
        self.setup.append(self._windowjs())

    def _windowjs(self):
        """You may append to or override this method if you have other js files."""

        js = """
        const jsdom = require("jsdom");
        const { JSDOM } = jsdom;
        const resourceLoader = new jsdom.ResourceLoader({userAgent: ua});
        const dom = new JSDOM(src, {
            pretendToBeVisual: true,
            url: url,
            referrer: referrer,
            resources: resourceLoader,
            runScripts: "dangerously",
        });
        dom.reconfigure({ windowTop: {} });
        window = dom.window;
        """
        return dedent(js)

    async def eval(self, script: str):
        """Eval a script(expression) throught :js:meth:`window.eval`.

        :return: script(expression) result, if any.
        """
        return await self(f"window.eval(`{script}`)")

    def add_eval(self, script: str):
        """Cache this script into queue. Scripts will be called in order.

        :return: None
        """
        self.add_run("window.eval", script)


# def test_jsdom():
#     assert JSDOM.check_jsdom()
#     ua = "cherry"
#     location = "http://a.com/here"
#     referrer = "http://a.com/past"
#     dom = JSDOM(ua=ua, location=location, referrer=referrer)
#     assert dom.get("window.navigator.userAgent") == ua
#     assert dom.get("window.document.location.href") == location
#     assert dom.get("window.document.referrer") == referrer


# if __name__ == "__main__":
#     test_jsdom()