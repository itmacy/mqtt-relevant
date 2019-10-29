# mqtt-relevant
## 1.什么是mqtt
> mqtt是一个基于发布/订阅模式的轻量级消息协议，常用于M2M，即machine to machine，或IOT，Internet of things，简单的说在物联网应用中，使用mqtt作为数据传输的协议.
> mqtt的payload使用二进制字节的方式进行传输，从而达到节省带宽并且传输速度快，mqtt协议属于长连接.

## 2.以前学过的传输协议
> 前后端开发中最基本的http协议，http的payload可以是文本，也可以是二进制字节，如文件.
> webservice远程调用的soap协议,soap基于xml，也就是payload是xml格式的文本.

## 3.如何使用mqtt
> mqtt是使用发布订阅的方式来，来让发布者和订阅者对发送和接收的数据进行处理，因此需要一个媒介来对消息进行派发，这个媒介叫做broker，叫做mqtt的服务器端，发布者和订阅者
均为该broker的客户端，也就是mqtt的客户端，发布者根据主题发送消息，订阅者则根据订阅该主题，从而接收消息进行处理，关系如下：
> - 1.发布者根据主题发送消息到broker
> - 2.broker接收到发布者的消息后，根据已订阅该主题的订阅者进行派发消息
> - 3.订阅者接收到消息后，即可进行处理
> - 4.注意：任意一端的mqtt客户端，既可以是发布者，也可以是订阅者

## 4.什么软件或工具可以作为broker
> 查询可作为mqtt服务器端的工具：https://github.com/mqtt/mqtt.github.io/wiki/servers .
> 具体使用需要具体根据工具的使用情况

## 5.如何使用mqtt客户端
> 同一个mqtt客户端可能为不同语言提供了实现，使用什么语言开发，就用什么语言实现的客户端，例如paho，提供了java客户端，js客户端等
> -	java客户端：在java中，使用java语言实现mqtt作为客户端，需要遵循JMS规范，也就是如何连接到broker，如何
发送和接收消息都要遵循JMS规范，假如实现了JSM规范的工具，再实现了mqtt协议，也就是对mqtt做了支持，则可以使用该工具作为mqtt的java客户端，例如activemq，是一个遵循JMS规范的消息处理工具，
同时实现了mqtt协议，因此在java中，可以使用activemq作为mqtt的客户端，具体使用参考activemq
> - js客户端：可以使用paho的js客户端，参考：https://www.eclipse.org/paho/clients/js/，也可以使用MQTT js客户端，参考https://github.com/mqttjs/MQTT.js，js是使用websocket客户端来进行与broker的长连接

## 6.mqtt GUI客户端去哪下载
> 使用GUI客户端方便调试我们发布订阅的消息，可以参考http://www.mamicode.com/info-detail-2511086.html选择客户端，下面提供GUI客户端下载地址
> -	MQTT.fx （基于java开发）:
	官网：http://www.mqttfx.org/ .
	下载地址：http://www.jensd.de/apps/mqttfx/ .
		
> - Eclipse Paho MQTT Utility（基于java开发，本人在开发中使用该gui客户端）:
	官网：http://www.eclipse.org/paho/
	下载地址：http://www.eclipse.org/paho/components/tool/

> - MQTTBOX（支持websocket协议）:
	官网：http://workswithweb.com/mqttbox.html
	下载地址：http://workswithweb.com/html/mqttbox/downloads.html