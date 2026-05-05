interface ItemCounterProps {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({name, quantity = 1}: ItemCounterProps) => {

    const handleClick = () => {
        console.log(`Click en ${name}`)
    }

  return (
    <section
    style = {{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        marginTop: 10,
    }}>
        <span
        style = {{
            width: 150,
        }}>
            {name}
        </span>
        <button
            onClick={handleClick}
        >+1</button>
        <span>{quantity}</span>
        <button>-1</button>
    </section>
  )
}
