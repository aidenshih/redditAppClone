const defaultState = {
  allMemes: [
    {id: 1, title: 'Slender Man', url: `http://knowyourmeme.com/memes/slender-man`},
    {id: 2, title: 'Doge', url: `http://knowyourmeme.com/memes/doge`},
    {id: 3, title: 'Arrow in the Knee', url: `http://knowyourmeme.com/memes/i-took-an-arrow-in-the-knee`},
    {id: 4, title: 'Tide Pods', url: `http://knowyourmeme.com/memes/tide-pod-challenge`},
    {id: 5, title: 'Whomst', url: `http://knowyourmeme.com/memes/whomst`}
  ],
  oneMeme: [],
  url: [],
  title: [],
}

export default (state = defaultState, action) => {
  let newState = state;

  switch (action.type) {
    case "GET_ALL":
      return newState;
    case "GET_ONE":
      let theOne = newState.allMemes.filter((meme) => {
        if (meme.id === Number(action.id)) {
          return meme
        }
      })

      if (theOne[0]) {
        return ({
          allMemes: newState.allMemes,
          oneMeme: theOne[0]
        });
      } else {
        return newState;
      }
    case "ADD_URL":
      return ({
        allMemes: newState.allMemes,
        oneMeme: [],
        url: action.url,
        title: newState.title
      });
    case "ADD_TITLE":
      return ({
        allMemes: newState.allMemes,
        oneMeme: [],
        url: newState.url,
        title: action.title
      });
    case "RESET_ALL":
    const arrayOfIDs = newState.allMemes.map( meme => meme.id)
    console.log(arrayOfIDs)
    const getNextID = arrayOfIDs.reduce( (current, index) => {
      if (current !== index+1) {
        return current+1
      }
    })
    const newAllMemes = [...newState.allMemes, {id: getNextID, title: newState.title, url: newState.url}]
      return ({
        allMemes: newAllMemes,
        oneMeme: [],
        url: [],
        title: []
      });
    default:
      return newState;
  }
};
