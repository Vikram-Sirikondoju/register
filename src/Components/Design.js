import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { AiOutlineUser } from 'react-icons/ai';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';

import Box from '@mui/material/Box';
import React from 'react'
import { MenuItem, Paper, TextField } from '@mui/material';

const currencies = [
  {
    value: 'year',
    label: '0',
  },
  {
    value: 'year',
    label: '1',
  },
  {
    value: 'year',
    label: '2',
  },
  {
    value: 'year',
    label: '3',
  },
];


export default function Design() {
  return (

    <div>
      <div className='row'>
        <div className='col-md-4 left'>
          <br /><br /><br /><br /><Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="py-0 px-2">1</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="content mt-2">Build Your dreams</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="py-0 px-2">2</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="content mt-2">Flight selected </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="py-0 px-2">3</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="content mt-2">Info details </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="py-0 px-2">4</TimelineDot>
              </TimelineSeparator>
              <TimelineContent className="content mt-2">Confirmation</TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div className='col-md-8 contentdata'>

          <div className='content p-3'>
            <form>
              <img align="right" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADKCAMAAACCLxz5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC6FBMVEUAAAA7nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf87nf////9k5MwXAAAA9nRSTlMAAAg6cY1+SxM4rPD4x1oFCmvj9pMcKKb6yEYBWdbsER2U9f62NEjJ4WkJ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" width="50" height="50"></img>
              <br /><br /><br />
              <Paper elevation={3} className='paper m-3 p-4'>
                <div>
                  <div className='row'>
                    {/* How Many of you are */}
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label"><b><AiOutlineUser style={{ "fontSize": "2px;" }} />How many of you are</b></label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div><br />
                    <div className='row'>
                      <div className='col-md-6'>
                      <label for="exampleInputEmail1" class="form-label"><b><AiOutlineUser style={{ "fontSize": "2px;" }} />Children (Min-0,Max-6) (2yrs-11yrs)</b></label>
                        <Box
                          component="form"
                          sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <div>
                            <TextField
                              id="standard-select-currency"
                              select
                              label="Select"
                              defaultValue="EUR"
                              variant="standard"
                            >
                              {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>

                          </div>
                          <div>


                          </div>
                          <div>


                          </div>
                        </Box>
                      </div>
                      <div className='col-md-6'>
                        <label for="exampleInputEmail1" class="form-label"><b><AiOutlineUser style={{ "fontSize": "2px;" }} />Children (Min-0,Max-6) (2yrs-11yrs)</b></label>
                        <Box
                          component="form"
                          sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <div>
                            <TextField
                              id="standard-select-currency"
                              select
                              label="Select"
                              defaultValue="EUR"
                              variant="standard"
                            >
                              {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>

                          </div>
                          <div>


                          </div>
                          <div>


                          </div>
                        </Box>
                      </div>
                      <div className='col-md-6'>
                        <label for="exampleInputEmail1" class="form-label"><b><AiOutlineUser style={{ "fontSize": "2px;" }} />Infants (Min-0,Max-7) (2yrs-11yrs)

                        </b></label>
                        <Box
                          component="form"
                          sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <div>
                            <TextField
                              id="standard-select-currency"
                              select
                              label="Select"
                              defaultValue="EUR"
                              variant="standard"
                            >
                              {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>

                          </div>
                          <div>


                          </div>
                          <div>


                          </div>
                        </Box>
                        
                      </div>
                      <div className='col-md-6'>
                        <label for="exampleInputEmail1" class="form-label"><b><AiOutlineUser style={{ "fontSize": "2px;" }} />Infants (Min-0,Max-7) (2yrs-11yrs)

                        </b></label>
                        <Box
                          component="form"
                          sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <div>
                            <TextField
                              id="standard-select-currency"
                              select
                              label="Select"
                              defaultValue="EUR"
                              variant="standard"
                            >
                              {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>

                          </div>
                          <div>


                          </div>
                          <div>


                          </div>
                        </Box>
                        
                      </div>

                    </div>

                  </div>
                </div>
              </Paper><br />
              <div className='row ms-auto'>
                <div className='col-md-8'>

                </div>
                <div className='col-md-4'>
                  <button className='btn btn-primary m-2 '><FaLongArrowAltLeft />Back</button>
                  <button className='btn btn-primary m-2'>Submit<FaLongArrowAltRight /></button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

















