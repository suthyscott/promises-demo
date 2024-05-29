import axios from 'axios' 

const getFunc = async () => {
    const res = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=single')
    console.log('in func', res.data.joke)
    return res.data.joke
}


console.log('out of func', getFunc())

