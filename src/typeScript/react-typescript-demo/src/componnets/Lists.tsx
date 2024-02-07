type ListType<T> = {
    items: T[],
    handleClick: (value: T) => void
}

// this concept i sgeneric props and also study the restriction props 
// template literals and exclude and wrapping element and omit
// export const Lists = <T extends {id: number}>({items, handleClick}: ListType<T>) => {
export const Lists = <T extends {id: number}>({items, handleClick}: ListType<T>) => {
  return (
    <div>
        <h1>Lists</h1>
        {
            items.map((item, index) => {
                return <div key={item.id} onClick={() => handleClick(item)}>
                    <p>{item.id}</p>
                </div>
            })
        }
    </div>
  )
}
