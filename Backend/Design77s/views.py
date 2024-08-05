# from django.core.mail import EmailMessage,send_mail,EmailMultiAlternatives
from django.http import JsonResponse
def sendo(request):
    try:
        # send_mail('Fund Time Account Activation', 'activate_url',
        #       'nanomanfaa@outlook.com', ['romany@alrowadit.com'],
        #       fail_silently=False)
        print('Success')
    except Exception as e:
        print("Error sending",e)
    return JsonResponse({"success": True})

