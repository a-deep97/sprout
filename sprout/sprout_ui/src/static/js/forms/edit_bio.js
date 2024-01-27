
import '../../css/edit-bio-form.css';

import React ,{useState} from 'react';
import {TextField,Typography,Box,IconButton} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import SaveIcon from '@mui/icons-material/Save';

import getCookie from '../lib/authentication';
import config from '../../../config';

function EditBio(props){

    const APIdomain = config.APIdomain;
    const [bio,setBio] = useState('')
    const [twitterLink,setTwitterLink] = useState('');
    const [linkedInLink,setLinkedInLink] = useState('');
    const [facebookLink,setFacebookLink] = useState('');
    const [websiteLink,setWebsiteLink] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData={
            "bio":bio,
            "twitter":twitterLink,
            "facebook":linkedInLink,
            "linkedIn":facebookLink,
            "website":websiteLink
          }
          const csrfToken = getCookie('csrftoken');
          fetch(`${APIdomain}/profile/bio/edit`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrfToken,
              },
              body: JSON.stringify(formData),
              credentials : 'include',
              })
              .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then((data) => {
                console.log('Response from server:', data);
                props.handleSave(data.bio,data.twitter,data.linkedIn,data.facebook,data.website);
              })
              .catch((error) => {
                console.error('There was a problem with the edit operation:', error);
                window.alert("Bio could not be updated :( \n\n "+ error.message)
          });
    }
    return(
        <form className='edit-bio-form' onSubmit={ (e) => {handleSubmit(e)}}>
            <TextField
                InputProps={{
                    style: { color: 'white' } // Apply style to input element
                }}
                InputLabelProps={{
                    shrink: true,
                    style: { color: 'white' } // Apply style to input label
                }}
                style={{ marginLeft: '5px' }}
                size='small'
                placeholder='bio ...'
                onChange={ (e) => setBio(e.target.value)}
                
            />
            <Box display={'flex'} marginTop={1} flexDirection={'column'} alignContent={'center'} alignItems={'center'} style={{'border-top': 'solid 0.5px rgba(255,255,255,0.5)'}}>
                <Typography marginTop={1}>social links</Typography>
                <Box display={'flex'} marginTop={2} flexDirection={'row'} alignContent={'center'} alignItems={'center'}>
                    <TwitterIcon fontSize='small'/>
                    <TextField
                        InputProps={{
                            style: { color: 'white' } // Apply style to input element
                        }}
                        InputLabelProps={{
                            shrink: true,
                            style: { color: 'white' } // Apply style to input label
                        }}
                        style={{ marginLeft: '5px' }}
                        size='small'
                        placeholder='twitter...'
                        onChange={ (e) => setTwitterLink(e.target.value)}
                    />
                </Box>
                <Box display={'flex'} flexDirection={'row'} alignContent={'center'} alignItems={'center'}>
                    <LinkedInIcon fontSize='small'/>
                    <TextField
                        InputProps={{
                            style: { color: 'white' } // Apply style to input element
                        }}
                        InputLabelProps={{
                            shrink: true,
                            style: { color: 'white' } // Apply style to input label
                        }}
                        style={{ marginLeft: '5px' }}
                        size='small'
                        placeholder='linkedin...'
                        onChange={ (e) => setLinkedInLink(e.target.value)}
                    />
                </Box>
                <Box display={'flex'} flexDirection={'row'} alignContent={'center'} alignItems={'center'}>
                    <FacebookIcon fontSize='small'/>
                    <TextField
                        InputProps={{
                            style: { color: 'white' } // Apply style to input element
                        }}
                        InputLabelProps={{
                            shrink: true,
                            style: { color: 'white' } // Apply style to input label
                        }}
                        style={{ marginLeft: '5px' }}
                        size='small'
                        placeholder='facebook...'
                        onChange={ (e) => setFacebookLink(e.target.value)}
                    />
                </Box>
                <Box display={'flex'} flexDirection={'row'} alignContent={'center'} alignItems={'center'}>
                    <LanguageIcon  fontSize='small'/>
                    <TextField
                        InputProps={{
                            style: { color: 'white' } // Apply style to input element
                        }}
                        InputLabelProps={{
                            shrink: true,
                            style: { color: 'white' } // Apply style to input label
                        }}
                        style={{ marginLeft: '5px' }}
                        size='small'
                        placeholder='website...'
                        onChange={ (e) => setWebsiteLink(e.target.value)}
                    />
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'flex-end'}>
                <IconButton type='submit' color='inherit' size='large'>
                    <SaveIcon color='white' fontSize='large'/>
                </IconButton>
            </Box>
        </form>
    )
}

export default EditBio;