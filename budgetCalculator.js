function paperRequirements(book1Copy, book2Copy, book3Copy) {
  if (
    book1Copy < 0 ||
    book2Copy < 0 ||
    book3Copy < 0 ||
    book1Copy % 1 ||
    book2Copy % 1 ||
    book3Copy % 1
  )
    return "Invalid input";
  const book1Page = book1Copy * 100;
  const book2Page = book2Copy * 200;
  const book3Page = book3Copy * 300;
  const totalPage = book1Page + book2Page + book3Page;
  return totalPage;
}
