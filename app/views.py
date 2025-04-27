from django.shortcuts import render
from .models import JET
import json

def main(request):
    jet = JET.objects.all()
    jet_list = list(jet.values('title', 'decription', 'image','tezlik','zaryad'))  # faqat kerakli fieldlar
    context = {
        'jet': jet,
        'jet_json': json.dumps(jet_list),  # JSON formatga o‘tkazdik
        'nechta_jet': len(jet)
    }
    return render(request, 'main.html', context)
