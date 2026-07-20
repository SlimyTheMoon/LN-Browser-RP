package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	port := "8080"
	if p := os.Getenv("PORT"); p != "" {
		port = p
	}

	fs := http.FileServer(http.Dir("."))
	http.Handle("/", fs)

	addr := "0.0.0.0:" + port
	fmt.Printf("Serving on http://%s\n", addr)
	log.Fatal(http.ListenAndServe(addr, nil))
}
