import {Container} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsList from '../components/ProjectsList';
import ProjectContextProvider from '../contexts/ProjectContext';





const ListPage = () => {
        
    return (
        // Listing contents in table format:
           <div>
            <Header/>
            <Container style={{marginTop: '2%', paddingBottome: '2px'}}>
           <ProjectContextProvider>
               <ProjectsList/>
           </ProjectContextProvider>
            </Container>
            <Footer/>
            </div>
    )
}

export default ListPage;








