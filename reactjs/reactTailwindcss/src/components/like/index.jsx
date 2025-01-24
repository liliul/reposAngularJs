import { useState } from "react"
import { ThumbsUp } from "@phosphor-icons/react"

function Like() {
    const [like, setLike] = useState(0)

    function handleLike() {
        // closures no React
            setLike((state) => {
                return state + 1
            })
    }
    return (
        <>
            <div>
                <p>Likes {like}</p>
                <button
                    className="p-2 bg-purple-950" 
                    onClick={handleLike}
                >
                    <ThumbsUp  size={24}/>
                </button>
            </div>
        </>
    )
}

export default Like