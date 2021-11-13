<template>
  <div class="home">
    <button @click="addTodo">Ajouter une tache</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  data() {
    return {
      todos: [
        {
          name: "Demo",
          completed: true,
        },
      ],
    };
  },
  components: {
  },
  methods: {
    addTodo() {
      this.todos.push({
        name: "rkota",
        completed: false,
      });
    },
  },
};
</script>
