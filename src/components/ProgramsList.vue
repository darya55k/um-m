<template>
  <template v-for="(program, index) in programs" v-bind:key="index">
    <ProgramTile v-if="[index < parseInt(limit, 10)]"
                 v-bind="{ program: program, index: index }"
                 @select-program="selectProgram"
    ></ProgramTile>
  </template>
</template>

<script>
import ProgramTile from "@/components/ProgramTile";

export default {
  name: 'ProgramList',
  props: {
    limit: Number,
    favourite: Boolean
  },
  components: {
    ProgramTile
  },
  data() {
    return {
      programs: []
    }
  },
  computed: {
    selectedPrograms() {
      return this.$store.state.programs.selected_programs;
    }
  },
  methods: {
    selectProgram(index, value) {
      this.programs[index].selected = value;
      this.selected = this.checkSelected();

      this.$store.dispatch('programs/storeSelected', this.programs);
    },
  },
  mounted() {
    // список программ
    if (this.favourite) {
      this.programs = this.selectedPrograms;
    } else {
      this.$store.dispatch('programs/list', this.$store.state.auth.user.id).then(
          (response) => {
            this.programs = response;
          },
          (error) => {
            console.log(error)
          }
      );
    }
  },
}
</script>
