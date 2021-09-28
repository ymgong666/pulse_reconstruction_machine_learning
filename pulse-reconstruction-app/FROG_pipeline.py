#!/usr/bin/env python
# coding: utf-8

# In[17]:


import numpy as np
import matplotlib.pyplot as plt
from scipy import interpolate
import random
### Data dimension: (the number of FROG traces, delay times, optical frequency)
########## These are the params need to be defined 
# exp_time_res = 6e-15
# exp_freq_res = 0.5 * (1/exp_time_res) / 64
# exp_time = np.arange(-(exp_time_res * 70)/2, (exp_time_res * 70)/2, exp_time_res)

# exp_freq = np.arange(-(exp_freq_res * 90)/2, (exp_freq_res * 90)/2, exp_freq_res)

# # exp_data = np.sin(exp_ff**2+exp_tt**2)

# exp_cen_freq = exp_freq[int(len(exp_freq)/2)]

# exp_cen_time = exp_time[int(len(exp_time)/2)]

# exp_start_freq = exp_freq[0]

# exp_start_time = exp_time[0]

###############
exp_time_res = 6e-15
exp_freq_res = 0.5 * (1/exp_time_res) / 64
exp_time = np.arange(-(exp_time_res * 70)/2, (exp_time_res * 70)/2, exp_time_res)

exp_freq = np.arange(-(exp_freq_res * 90)/2, (exp_freq_res * 90)/2, exp_freq_res)

# exp_data = np.sin(exp_ff**2+exp_tt**2)

exp_cen_freq = exp_freq[int(len(exp_freq)/2)]

exp_cen_time = exp_time[int(len(exp_time)/2)]

exp_start_freq = exp_freq[0]

exp_start_time = exp_time[0]

N_samples = 10

# Create test dataset
# f = np.arange(-0.25*90/2, 0.25*90/2, 0.25)

# t = np.arange(-0.25*70/2,0.25*70/2, 0.25)

# ff, tt = np.meshgrid(f, t)

# exp_data = np.sin(ff**2+tt**2)

# exp_data = np.repeat(exp_data[np.newaxis, :, :], N_samples, axis=0)

# load test dataset
with open('data.npy', 'rb') as f:

    exp_data = np.load(f)

def get_random_trace(data):
    return data[random.randint(0,data.shape[0])-1,:,:]

def pipeline(freq_res, cen_freq, start_freq, time_res, cen_time, start_time, data):
    ### define default params
    
    time_res_default = 5e-15
    delay_step_default = 64
    time_span_default = time_res_default * delay_step_default
    freq_res_default = 0.5 * (1/time_res_default) / delay_step_default
    freq_span_default = freq_res_default * 64
    ### define experimental params
    cen_timing_idx = (cen_time - start_time)/ time_res
    cen_freq_idx = (cen_freq - start_freq)/ freq_res
    if time_res * data.shape[1] < time_span_default:
        return 'Your time span is too short! The smallest time span is' + str(time_span_default)
    elif freq_res * data.shape[2] < freq_span_default:
        print(freq_res * data.shape[2])
        return 'Your frequency span is too short! The smallest frequency span is' + str(freq_span_default)
    else:
        ### exponetial fitting on the integrated 1d frog trace to get the central timing idx
        ### find the idx corresponding to the central frequency
        intrpd_data = np.zeros((data.shape[0],delay_step_default,delay_step_default))
        for i in range(data.shape[0]):
            cen_timing_idx = (cen_time - start_time)/ time_res
            cen_freq_idx = (cen_freq - start_freq)/ freq_res


            cropped_data = data[i,int(cen_timing_idx) - int(time_span_default / time_res / 2): int(cen_timing_idx) + int(time_span_default / time_res / 2), int(cen_freq_idx) - int(freq_span_default / freq_res / 2) : int(cen_freq_idx) + int(freq_span_default / freq_res / 2)]
            ### interpolation
            cropped_data_time = np.arange(0, cropped_data.shape[0])
            cropped_data_freq = np.arange(0, cropped_data.shape[1])
            f = interpolate.interp2d( cropped_data_freq, cropped_data_time, cropped_data, kind='cubic')
            data_time = np.arange(0, cropped_data.shape[0], cropped_data.shape[0]/64)
            data_freq = np.arange(0, cropped_data.shape[1], cropped_data.shape[1]/64)
            intrpd_data[i,:,:] = f(data_freq, data_time)
    return intrpd_data

intrpd_data = pipeline(exp_freq_res, exp_cen_freq, exp_start_freq, exp_time_res, exp_cen_time, exp_start_time, exp_data)
random_trace = get_random_trace(exp_data)
plt.imshow(random_trace)


# In[ ]:




