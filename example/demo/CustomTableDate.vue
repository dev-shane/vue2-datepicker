<template>
  <div class="box">
    <section>
      <p>date (default)</p>
      <date-picker
        v-model="value1"
        format="YYYY-MM-DD"
        type="date"
        placeholder="Select date"
        popup-class="custom-datepicker"
        date-cell-component="simple-date-cell"
        :get-date-cell-data="getCellData"
      ></date-picker>
    </section>
  </div>
</template>
<style>
.custom-datepicker .mx-calendar {
  width: initial;
}
.custom-datepicker .mx-calendar-content {
  height: initial;
}
</style>
<script>
export default {
  name: 'CustomTableDate',
  data() {
    return {
      value1: null,
    };
  },
  methods: {
    getCellData(date) {
      return {
        display: date.getDate(),
        date,
        title: `cutom title for
        ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      };
    },
  },
};
</script>
