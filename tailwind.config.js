module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
   fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'PlayfairDisplay-Bold'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'title':['sans-serif','Poppins-Regular'],
     },
    container:{center:true},
    extend: {
      colors:{
        'purple':'rgba(103,117,214,0.8)',
        'gray':'#888',
        'grayter':'#333',
        'black':'#222',
        'title':'#999',
        'price':'#888',
        'white':'#fff',
        'light':'#d6dbde',
        'filter':'#f2f2f2',
        'date':'rgba(255,255,255,0.9)',
        'btn':'#f3f3f3'
      }
    },
  },
  variants: {
    // scrollbar: ['dark','rounded'],
    extend: {},
  },
  plugins: [
    // require('tailwind-scrollbar'),
  ],
}
