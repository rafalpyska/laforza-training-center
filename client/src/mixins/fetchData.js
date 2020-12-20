export default {
  methods: {
    async http(url, method = 'GET', headers = { 'Content-Type': 'application/json'}) {
      this.error = '';
      this.loading = true;
      try {
        const response = await fetch(url, {
          method,
          headers
        });
        return await response.json();
      } catch (error) {
        this.error = error
      }
    }
  }
}
