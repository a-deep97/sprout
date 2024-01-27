
import '../../css/edit-bio-form.css';

import React ,{useState} from 'react';
import {TextField,Typography,Box,IconButton} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import SaveIcon from '@mui/icons-material/Save';

function EditBio(props){

    const [bio,setBio] = useState(null)
    const [twitterLink,setTwitterLink] = useState(null);
    const [linkedInLink,setLinkedInLink] = useState(null);
    const [facebookLink,setFacebookLink] = useState(null);

    const handleSubmit = () =>{
        props.handleSave();
    }
    return(
        <form className='edit-bio-form' onSubmit={handleSubmit}>
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