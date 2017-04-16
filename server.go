
package main

import (
	"fmt"
	// "io/ioutil"
	"net/http"
	"html/template"
)

type Page struct {
	Title string
	Body []byte
}

func main() {
 	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./public"))))

	http.HandleFunc("/", indexHandler)
	fmt.Println("server listening on port 8081...")
	http.ListenAndServe(":8081", nil)
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