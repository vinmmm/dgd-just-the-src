import React, { Component } from 'react';

import AddColorForm from './AddColorForm';
import ColorList from './ColorList';



const Color = ({title,color,rating=0,onRemove=f=>f,onRate=f=>f}) => <section className="color">
<h1>{title}</h1>
<button onClick={onRemove}>X</button> <div className="color"
                 style={{ backgroundColor: color }}>
            </div>
<div>
<StarRating starsSelected={rating} onRate={onRate} />
            </div>
        </section>



const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) => 
<div className="color-list">
            {(colors.length === 0) ?
                <p>No Colors Listed. (Add a Color)</p> :
                colors.map(color =>
                    <Color key={color.id}
                           {...color}
                           onRate={(rating) => onRate(color.id, rating)} onRemove={() => onRemove(color.id)} />
) }
</div>


class Comments extends Component {
constructor(props) { super(props)
this.state = { colors: []
}
this.addColor = this.addColor.bind(this)

this.rateColor = this.rateColor.bind(this)
this.removeColor = this.removeColor.bind(this) }
addColor(title, color) { const colors = [
...this.state.colors, {
            id: v4(),
            title,
            color,
            rating: 0
} ]
this.setState({colors}) }
rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
        (color.id !== id) ?
            color :
{
...color,
rating
    this.setState({colors})
}
removeColor(id) {
    const colors = this.state.colors.filter(
        color => color.id !== id
    )
    this.setState({colors})
}
render() {
const { addColor, rateColor, removeColor } = this const { colors } = this.state
return (
        <div className="app">
            <AddColorForm onNewColor={addColor} />
            <ColorList colors={colors}
            onRate={rateColor} onRemove={removeColor} />
} )
</div> )
} }




export default Comments;