<?php

return array(
    'label' => array('Slider', 'Meine Beschreibung...'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'slide' => array(
            'inputType' => 'list',
            'label' => array('Tabs', 'Rechts auf "Neues Element" klicken'),
            'fields' => array(
                'image' => array(
                    'label' => array('Bild', 'Beschreibung...'),
                    'eval' => array('filesOnly' => true),
                    'inputType' => 'fileTree'
                ),
                'description' => array(
                    'label' => array('Text', 'Beschreibung...'),
                    'eval' => array('rte' => 'tinyMCE'),
                    'inputType' => 'textarea',
                ),
                'caption' => array(
                    'label' => array('Unterschrift', 'Beschreibung...'),
                    'inputType' => 'text',
                )
            )
        )
    )
);





