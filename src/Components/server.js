import { createServer, Model } from "miragejs";


export default function() {
    createServer({
        models: {
            book: Model,
            genre: Model
        },
        routes() {
            this.get('/api/books', (schema) => {
                return schema.books.all();
            });

            this.delete('/api/book/:id', (schema, request) => {
                let id = request.params.id;
                return schema.books.find(id).destroy();
            });
            this.post('/api/add_book', (schema, request) => {
                let body = JSON.parse(request.requestBody);
                return schema.books.create(body);
            });
        }
    })
}