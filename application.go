
package main

import (
	"net/http"
	"html/template"
	"log"
)

type Page struct {
	Title string
	Body []byte
}

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./public"))))
	http.HandleFunc("/", indexHandler)
	http.ListenAndServe(":5000", nil)
	log.Println("server running on port 5000")
}

func renderTemplate(w http.ResponseWriter, tmpl string, p *Page) (error) {
    t, err := template.ParseFiles(tmpl + ".html")
    if err != nil {
	return err
    }
    t.Execute(w, p)
    return nil
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	p := &Page{ Title: "hello world" }
	renderTemplate(w, "public/index", p)
}
