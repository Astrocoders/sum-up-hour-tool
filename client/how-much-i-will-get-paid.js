/**
 * How Much events
 */


Template.howMuch.events({
  'keyup .js-time, keyup .js-rate'(event, template) {
    const time = template.$('.js-time').val();
    const hours = moment.duration(time).asHours();

    const rate = template.$('.js-rate').val();

    const total = parseFloat(hours) * parseFloat(rate);
    template.$('.js-total').val(total.toFixed(2));
  }
});