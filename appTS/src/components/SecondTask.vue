<script setup lang="ts">
    interface Person {
    firstName: string
    lastName: string
    age: number
    email: string
    address?: object
    }

    const person: Person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        email: 'test@test.com',
        address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
        }
    }


    const personSingleData: Partial<Person> = {
        address: {
            street: '30 Second Main st',
            city: 'Los Angeles',
            state: 'CA'
        }
    }
    const personSecondData: Required<Person> = {
        firstName: 'Melisa',
        lastName: 'Carter',
        age: 35,
        email: 'test@typrescript.roc',
        address: {
            street: '70 Second Main st',
            city: 'Las Vegas',
            state: 'NA'
        }   
    }

    const personThirdData: Record<string, string> = {
        firstName: 'Gloria',
        lastName: 'Parker',
        email: 'test@testing.moc'  
    }

    console.log('Person Interface & add data property =>', person)
    console.log('Utility Types Partial =>', personSingleData)
    console.log('Utility Types Required =>', personSecondData)
    console.log('Utility Types Record =>', personThirdData)
</script>
<template>
<div>
    <h1>Second Task</h1>
    <p>First Name: {{ person.firstName }}</p>
    <p>Last Name: {{ person.lastName }}</p>
    <p>Age: {{ person.age }}</p>
    <p>Email: {{ person.email }}</p>
    <p>Address: {{ person.address }}</p>
</div>
</template>

