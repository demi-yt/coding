import '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'Jokcy'
    }
  },
  render (h) {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
