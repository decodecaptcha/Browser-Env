from subprocess import CalledProcessError
from sys import stderr


class JsRuntimeError(CalledProcessError):
    """Error in executing javascript."""

    def __init__(self, returncode: int, cmd: str, stderr: bytes) -> None:
        super().__init__(returncode, cmd=cmd, stderr=stderr)

    def __str__(self) -> str:
        if isinstance(self.stderr, bytes):
            return self.stderr.decode()
        else:
            return str(self.stderr)


class NodeNotFoundError(FileNotFoundError):
    """Node executable not found."""

    pass


class JsImportError(RuntimeError):
    """Js module not installed."""

    pass
