<template>
  <table class="events-calendar">
    <thead>
      <tr class="events-calendar__days-row">
        <th class="events-calendar__day-cell" scope="col">Monday</th>
        <th class="events-calendar__day-cell" scope="col">Tuesday</th>
        <th class="events-calendar__day-cell" scope="col">Wednesday</th>
        <th class="events-calendar__day-cell" scope="col">Thursday</th>
        <th class="events-calendar__day-cell" scope="col">Friday</th>
        <th class="events-calendar__day-cell" scope="col">Saturday</th>
        <th class="events-calendar__day-cell" scope="col">Sunday</th>
      </tr>
    </thead>
    <tbody>
      <tr class="events-calendar__events-row">
        <td class="events-calendar__event-cell">b</td>
        <td class="events-calendar__event-cell">a</td>
        <td class="events-calendar__event-cell">c</td>
        <td class="events-calendar__event-cell">d</td>
        <td class="events-calendar__event-cell">e</td>
        <td class="events-calendar__event-cell">f</td>
        <td class="events-calendar__event-cell">g</td>
      </tr>
      <tr class="events-calendar__events-row">
        <td class="events-calendar__event-cell">a</td>
        <td class="events-calendar__event-cell">b</td>
        <td class="events-calendar__event-cell">c</td>
        <td class="events-calendar__event-cell">d</td>
        <td class="events-calendar__event-cell">e</td>
        <td class="events-calendar__event-cell">f</td>
        <td class="events-calendar__event-cell">g</td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="">
        <td class="events-calendar__month-cell">November</td>
        <td class="events-calendar__month-cell"></td>
        <td class="events-calendar__month-cell"></td>
        <td class="events-calendar__month-cell"></td>
        <td class="events-calendar__month-cell"></td>
        <td class="events-calendar__month-cell"></td>
        <td class="events-calendar__month-cell">January</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>

export default {
  name: 'EventsCalendar'
};
</script>

<style scoped lang="scss">
  .events-calendar {
    font-family: 'Play', sans-serif;
    text-transform: uppercase;
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    &__day-cell {
      background-color: var(--color-primary);
    }
    &__month-cell {
      background-color: var(--events-calendar-month-cell-bgc);
    }
    &__event-cell:nth-child(even) {
      background-color: var(--events-calendar-even-event-cell-bgc);
    }
    &__event-cell:nth-child(odd) {
      background-color: var(--events-calendar-odd-event-cell-bgc);
    }
  }

  th, td {
    padding: 20px;
    border: 1px solid var(--events-calendar-border);
  }
</style>
