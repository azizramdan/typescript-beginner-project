const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: 'Aziz Ramdan Kurniawan',
  age: 24,
  hobbies: ['Eat', 'Cooking']
}

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}