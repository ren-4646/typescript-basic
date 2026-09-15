type Title = {title: string};
type Price = {price: number};

// Title型とPrice型を合体させたインターセクション型に、Bookという別名をつける
type Book = Title & Price;

const book: Book = {
    title: 'TypeScript入門',
    price: 1000,
};

console.log(book);