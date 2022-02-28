const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Aziz Ramdan Kurniawan',
  age: 24,
  hobbies: ['Eat', 'Cooking'],
  role: [1, 'Author'],
}

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}