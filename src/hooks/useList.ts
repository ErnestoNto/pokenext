import { ListContext } from "@/context/listContext"
import { useContext } from "react"

export const useList = () => {
    const data = useContext(ListContext)

    return data
}