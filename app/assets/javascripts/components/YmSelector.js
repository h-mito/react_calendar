import React from "react"

class YmSelector extends React.Component{
  componentDidMount(){
    this.props.onYmChange(this.props.year, this.props.month)
  }

  render(){
    let year = this.props.year
    let month = this.props.month
    let onYmChange = this.props.onYmChange

    let years = [], months = []
    let i

    let today = new Date()
    let currYear = today.getFullYear()
    let currMonth = today.getMonth() + 1

    for (i = currYear -5 ; i < currYear + 2; i++){
      years.push(<option key={i} value={i}>{i}</option>)
    }

    for (i = 1 ; i <= 12 ; i++){
      months.push(<option key={i} value={i}>{i}</option>)
    }

    return (
      <div className="ymSelector">
        <select defaultValue={currYear} onChange={(e) => onYmChange(e.target.value, month)} >
          {years}
        </select>
        {"年 "}
        <select defaultValue={currMonth} onChange={(e) => onYmChange(year, e.target.value)} >
          {months}
        </select>
        {"月"}
      </div>
    )

  }
}

export default YmSelector
