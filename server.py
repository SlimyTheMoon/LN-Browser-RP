import argparse
import http.server
import os
import socketserver


class RequestHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        print(
            "%s - - [%s] %s"
            % (
                self.client_address[0],
                self.log_date_time_string(),
                format % args,
            )
        )


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Serve static files from the current directory."
    )
    parser.add_argument("--port", type=int, default=int(os.environ.get("PORT", 80)))
    parser.add_argument("--bind", default=os.environ.get("HOST", "0.0.0.0"))
    parser.add_argument("--dir", default=os.getcwd())
    args = parser.parse_args()

    os.chdir(args.dir)
    handler_class = RequestHandler

    with socketserver.ThreadingTCPServer((args.bind, args.port), handler_class) as httpd:
        print(
            f"Serving HTTP on {args.bind} port {args.port} (directory: {args.dir})"
        )
        httpd.serve_forever()


if __name__ == "__main__":
    main()
