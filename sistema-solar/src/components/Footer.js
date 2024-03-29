
import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../stylesheets/footer.css';
import '../stylesheets/reset.css';

export function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/' className='text-light'>
                   Home
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/PlanetasSistemaSolar' className='text-light'>
                   Planetas del Sistema Solar
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/Video' className='text-light'>
                   Video
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/Galeria' className='text-light'>
                  Galería
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/Contactenos' className='text-light'>
                   Newsletter
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    
      <MDBContainer className='p-4 pb-0' id='footer'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998'}}
            href='https://facebook.com'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://google.com'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://instagram.com'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/JasonJordanP'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
      
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © Enciclopedia Galáctica, 2022. All rights reserved.
      </div>
    </MDBFooter>
  );
}
