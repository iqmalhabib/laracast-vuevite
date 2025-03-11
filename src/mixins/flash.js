import swal from 'sweetalert';
export default {
  methods: {
    flash(message) {
      return swal('berjaya!', message, 'success');
    }
  }
}