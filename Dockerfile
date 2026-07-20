FROM golang:1.22-alpine AS builder

WORKDIR /src
COPY server.go .
RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o /app/server server.go

FROM alpine:latest
RUN apk add --no-cache ca-certificates

WORKDIR /app
COPY --from=builder /app/server /app/server
COPY . /app

EXPOSE 8080
CMD ["/app/server"]
