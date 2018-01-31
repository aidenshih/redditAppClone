const defaultState = {
  allComments: [
      { 1: ["good", "bad"], 
        2: ["good", "bad", "okay"] }
    ],
    showComments: [],
    comment: ''
}

export default (state = defaultState, action) => {
  let newState = state

  switch (action.type) {
    case "GET_ONE_C":
      let arr = []
      newState.allComments.forEach( obj => {
          
      });( (obj, i) => {
          let keys = Object.keys(obj)
          console.log('keys: ', keys)
          console.log('action.link_id: ', action.link_id)
          console.log('obj[i+1]: ', obj[i+1])
          if (keys[i] === action.link_id) {
            (obj[i+1]).forEach(element => {
                return element
            });
          } else {
              return null
          }
        })
        console.log(arr)
      return {
        allComments: newState.allComments,
        showComments: arr
      }
    case "ADD_ONE_C":
    return ({
        allComments: newState.allComments,
        showComments: [],
        comment: action.link_id
    })
    case "SUB_ONE_C":
    console.log('newState.allComments: ',newState.allComments)
        newState.allComments.map( comments => {
            comments.push
        })
      return ({
        allComments: newState.allComments,
        showComments: [],
        comment: ''
      })
    default:
      return newState
  }
}
