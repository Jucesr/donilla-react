export const getUniqueID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const getDate = () => {
  //Wed Dec 13 2017 10:39:00 GMT-0800 (Pacific Standard Time)
  return new Date().toString().split(' ').slice(1,3).join(' ');;
}

export const filterByStatus = (todos, status) => {
  return status == 'all' ? todos : todos.filter((todo) => todo.status == status)
}

export const filterByText = (todos, text) => {
  return todos.filter((todo) => todo.title.toLowerCase().includes(text))
}

export const filterByAuthor = (todos, author) => {
  return todos.filter((todo) => todo.author.toLowerCase() == author.toLowerCase())
}
