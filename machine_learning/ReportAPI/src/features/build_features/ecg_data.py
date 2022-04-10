from torch.utils.data import DataLoader
from ..data_class.ecg_class import ECGDataset

def data_loader(data):
    inference_set = ECGDataset(data)

    inference_params = {
        'batch_size': 1,
        'shuffle': False,
        'num_workers': 0
    }

    inference_loader = DataLoader(inference_set, **inference_params)

    return inference_loader