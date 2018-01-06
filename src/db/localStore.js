export default {
  getTodos :() => {
    var todos = window.localStorage.getItem('todos');
    return todos && JSON.parse(todos) || [];
  },

  saveTodos:(todos) => {
    try{
      window.localStorage.setItem('todos', JSON.stringify(todos));
      return true;
    }catch(e){
      return false;
    }
  }
}
