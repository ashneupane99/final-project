import { doc, setDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { db } from "../../config/firebase-config"
import { TBL_PRODUCT } from "../../utils/constant"


export const addProductAction =
  ({ slug, ...rest }) =>
  async (dispatch) => {
    try {
        const pending = setDoc(doc(db, TBL_PRODUCT, slug), rest, {merge:true})
        toast.promise (pending,{
            pending: "please wait...",
            success: "The product has been updated in the database successfully",
            error: "Product could not be added"
        })
        
    } catch (error) {
        toast.error(error.message)
        
    }
}