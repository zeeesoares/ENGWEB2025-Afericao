import json
from datetime import datetime

def convert_to_mongodb_format(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    converted_books = []
    current_id = 1;
    
    for book in books:
        price_str = book.get("price", "0")
        try:
            price = float(price_str.replace('.', '').replace(',', '.'))
        except (ValueError, AttributeError):
            price = 0.0
        
        authors = book.get("author", "")
        if isinstance(authors, str) and ',' in authors:
            authors = [author.strip() for author in authors.split(',')]
        else:
            authors = [authors.strip()] if authors else []


        new_book = {
            "_id": current_id,
            "bookId": book.get("bookId", ""),
            "title": book.get("title", ""),
            "series": book.get("series", ""),
            "author": authors,
            "rating": float(book.get("rating", 0)) if book.get("rating") else 0,
            "description": book.get("description", ""),
            "language": book.get("language", ""),
            "isbn": book.get("isbn", ""),
            "genres": eval(book.get("genres", "[]")) if book.get("genres") else [],
            "characters": eval(book.get("characters", "[]")) if book.get("characters") else [],
            "bookFormat": book.get("bookFormat", ""),
            "edition": book.get("edition", ""),
            "pages": book.get("pages", ""), 
            "publisher": book.get("publisher", ""),
            "publishDate": book.get("publishDate", ""),
            "firstPublishDate": book.get("firstPublishDate"),
            "awards": eval(book.get("awards", "[]")) if book.get("awards") else [],
            "numRatings": int(book.get("numRatings", 0)) if book.get("numRatings") else 0,
            "ratingsByStars": [int(x) for x in eval(book.get("ratingsByStars", "[]"))] if book.get("ratingsByStars") else [0, 0, 0, 0, 0],
            "likedPercent": book.get("likedPercent", 0),
            "setting": eval(book.get("setting", "[]")) if book.get("setting") else [],
            "coverImg": book.get("coverImg", ""),
            "bbeScore": int(book.get("bbeScore", 0)) if book.get("bbeScore") else 0,
            "bbeVotes": int(book.get("bbeVotes", 0)) if book.get("bbeVotes") else 0,
            "price": price
        }
        
        converted_books.append(new_book)
        current_id += 1
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(converted_books, f, indent=2, ensure_ascii=False)


input_filename = "dataset.json"
output_filename = "books_output.json"
convert_to_mongodb_format(input_filename, output_filename)