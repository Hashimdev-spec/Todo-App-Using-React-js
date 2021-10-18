import { StyledHeader } from './styles/Header.styled'
import {FormGroup, FormControlLabel, Switch, Badge } from '@material-ui/core'


export default function header({onAdd}) {
    return (
        <StyledHeader>
             <div id='text'>
            <h1>🚀 Lingr...</h1>
            <p>❄ Productivity Assistant 🎗</p>
            </div>
            <div id="Nightmode">
            <FormGroup>
    <FormControlLabel control={<Switch defaultChecked />} label="Focus Mode" onClick={onAdd} />
  
    </FormGroup>
    </div>
    <Badge badgeContent={`Hashim`} color="primary"/>
 
     

        </StyledHeader>
    )
}
