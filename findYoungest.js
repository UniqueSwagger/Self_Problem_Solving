function findYoungest(people) {
  let youngest = people[0];
  for (let i = 1; i < people.length; i++) {
    if (people[i].age < youngest.age) {
      youngest = people[i];
    }
  }
  return youngest;
}
const youngest = findYoungest([
  { name: "Emil", age: 62 },
  { name: "Tobias", age: 22 },
  { name: "Linus", age: 28 },
]);
console.log(youngest);
