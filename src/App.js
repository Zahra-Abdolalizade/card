import {Button} from './Components/Button.style'
import {AppContainer} from './Components/Container.style'
import {Main} from './Components/Main.style'
import {Mainpicture} from './Components/Main.style'
import {PicLayer} from './Components/Main.style'
import {Text,Text1} from './Components/Main.style'

function App() {
  return <AppContainer className='App'>
    <Main>
     <Text>Get insights that help your business grow. 
     
     </Text>
     <PicLayer>
     <Mainpicture src={"https://i.ibb.co/dcB6nWf/image-header-desktop.jpg"}>
     </Mainpicture>
     </PicLayer>
    </Main>
    
  </AppContainer>;
}

export default App;
