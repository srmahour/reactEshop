export default function Button({name = 'button'}){
    return(
        <button
            type="button"
            className="rounded-md border border-solid border-black bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
            {name}
        </button>
    )
}