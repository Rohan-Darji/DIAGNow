from torch.utils.data import DataLoader
from ..data_class.chest_class import XRayDataset

def data_loader(data):
    inference_set = XRayDataset(data)

    inference_params = {
        'batch_size': 1,
        'shuffle': False,
        'num_workers': 0
    }

    inference_loader = DataLoader(inference_set, **inference_params)

    return inference_loader
