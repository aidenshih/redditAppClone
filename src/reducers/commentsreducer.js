const defaultState = {
  allComments: [
    { id: 1, comments: ["good", "bad"] },
    { id: 2, comments: ["good", "bad", "okay"] }
  ],
  showComments: [],
  comment: ""
}

export default (state = defaultState, action) => {
  let newState = state

  switch (action.type) {
    case "GET_ONE_C":
      let arr = []
      newState.allComments.map(meme => {
        if (meme.id === Number(action.link_id)) {
          arr = [...meme.comments]
        } else {
          return null
        }
      })
      console.log(arr)
      return {
        allComments: newState.allComments,
        showComments: arr,
        comment: ""
      }

    case "ADD_ONE_C":
      // CHECK TO SEE IF LINK_ID HAS COMMENTS / IF NOT ADD THEM
      let memeHasComments = newState.allComments.map(meme => meme.id) // return an array of all meme ids
      let allCommentsWithNewObj = [] // empty array to hold all objs with new obj
      if (memeHasComments.includes(Number(action.link_id))) {
        console.log(allCommentsWithNewObj)
        return {
          allComments: newState.allComments,
          showComments: newState.showComments,
          comment: action.inputValue
        }
      } else {
        // if current inputValue is not in array of all meme ids
        allCommentsWithNewObj = [
          ...newState.allComments,
          { id: Number(action.link_id), comments: [] }
        ] // add [all current obj, new obj with current inputValue]
        console.log(allCommentsWithNewObj)
        return {
          allComments: allCommentsWithNewObj,
          showComments: newState.showComments,
          comment: action.inputValue
        }
      }
    case "SUB_ONE_C":
      // CREATE THE OBJECT'S COMMENT ARRAY
      let objComments = [] // objComments array to hold comments
      newState.allComments.map(meme => {
        // map through all current comments obj
        if (meme.id === Number(action.link_id)) {
          // if id is the one we want to change
          objComments = [...meme.comments, newState.comment] // objComments = [...current comments, text input value]
        } else {
          console.log("else")
        }
        return null
      })
      console.log(objComments)

      let newans = newState.allComments.map(meme => {
        // go through all the comments
        if (meme.id === Number(action.link_id)) {
          // if id is the one we want to change
          return { id: Number(action.link_id), comments: objComments } // return object with comments
        } else if (meme.id !== Number(action.link_id)) {
          // if id is not the one we want to change
          return { id: Number(meme.id), comments: meme.comments } // return original object
        } else {
          return
        }
      })

      console.log(newans)

      return {
        allComments: newans,
        showComments: newState.showComments,
        comment: ""
      }
    default:
      return newState
  }
}
