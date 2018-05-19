import { PARTICIPANTS_REQUEST, PARTICIPANTS_ERROR, PARTICIPANTS_SUCCESS } from "../constants";

const initialState = {
  requesting: false,
  errors: false,
  success: false,
  // TODO remove it
  data: [
    {
      "id": 13,
      "username": "Roma Maltsev",
      "pic": "https://api.telegram.org/file/bot593557429:AAGIWo2p9VbdWdvNNZf0o2GfgLrCH8zAMdU/photos/file_1.jpg",
      "contactPhone": null,
      "email": "No",
      "status": "activated",
      "skills": [
        "Backend",
        "DevOps",
        "Product manager",
        "Project manager"
      ],
      "tgProfileLink": "https://t.me/peramor",
      "isSearchable": true,
      "xp": "28"
    },
    {
      "id": 14,
      "username": "Ivan Kamakin",
      "pic": "https://api.telegram.org/file/bot593557429:AAGIWo2p9VbdWdvNNZf0o2GfgLrCH8zAMdU/photos/file_0.jpg",
      "contactPhone": null,
      "email": "ivkamakin@gmail.com",
      "status": "activated",
      "skills": [
        "Blockchain",
        "AI"
      ],
      "tgProfileLink": "https://t.me/van0k",
      "isSearchable": true,
      "xp": "14"
    }
  ]
};

const participantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARTICIPANTS_REQUEST:
      return {
        ...state,
        requesting: true,
        success: false,
        errors: false
      };
    case PARTICIPANTS_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        errors: action.errors
      };
    case PARTICIPANTS_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        errors: false,
        data: action.data
      };
    default:
      return state;
  }
};

export default participantsReducer;
